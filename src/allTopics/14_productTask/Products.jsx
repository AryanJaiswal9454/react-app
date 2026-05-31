import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

// ─── localStorage helpers ─────────────────────────────────
// These two functions are the only place localStorage is touched.
// Everything else just uses normal React state (cart, wishlist).

function loadFromStorage(key, fallback) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : fallback;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ─── Stars helper component ───────────────────────────────
function Stars({ rating }) {
  const filled = Math.round(rating);
  return (
    <span className={styles.stars}>
      {"★".repeat(filled)}
      <span className={styles.starsEmpty}>{"★".repeat(5 - filled)}</span>
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────
function Products() {

  // ── Server data ──────────────────────────────────────────
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);

  // ── Local persistent state ───────────────────────────────
  // Initial value is read from localStorage (so data survives refresh).
  // Every update also writes back to localStorage via the helpers above.
  const [cart,     setCart]     = useState(() => loadFromStorage("cart",     []));
  const [wishlist, setWishlist] = useState(() => loadFromStorage("wishlist", []));

  // ── UI state ─────────────────────────────────────────────
  const [view,      setView]     = useState("shop"); // "shop" | "cart" | "wishlist"
  const [modal,     setModal]    = useState(null);   // null = closed, product = open
  const [activeImg, setActiveImg]= useState(0);      // which thumbnail is shown in modal

  // ── Fetch products ────────────────────────────────────────
  useEffect(() => {
    const controller = new AbortController();
    async function fetchProducts() {
      try {
        const res  = await fetch("https://dummyjson.com/products", { signal: controller.signal });
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
    return () => controller.abort();
  }, []);

  // ── Cart actions ──────────────────────────────────────────
  // Every action: 1) compute new array  2) update state  3) save to localStorage
  function addToCart(product) {
    const alreadyInCart = cart.find(item => item.id === product.id);
    const newCart = alreadyInCart
      ? cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      : [...cart, { ...product, qty: 1 }];
    setCart(newCart);
    saveToStorage("cart", newCart);
  }

  function removeFromCart(id) {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    saveToStorage("cart", newCart);
  }

  function changeQty(id, amount) {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
    );
    setCart(newCart);
    saveToStorage("cart", newCart);
  }

  // ── Wishlist actions ──────────────────────────────────────
  function toggleWishlist(product) {
    const newWishlist = wishlist.some(item => item.id === product.id)
      ? wishlist.filter(item => item.id !== product.id)  // remove
      : [...wishlist, product];                          // add
    setWishlist(newWishlist);
    saveToStorage("wishlist", newWishlist);
  }

  // ── Shorthand checks (used in JSX to swap button styles) ──
  const isInCart     = (id) => cart.some(item => item.id === id);
  const isWishlisted = (id) => wishlist.some(item => item.id === id);

  // ── Modal open / close ────────────────────────────────────
  function openModal(product) {
    setModal(product);
    setActiveImg(0);
    document.body.style.overflow = "hidden"; // prevent background scroll
  }
  function closeModal() {
    setModal(null);
    document.body.style.overflow = "";
  }

  // ── Cart total ────────────────────────────────────────────
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  // ─────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────
  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav className={styles.nav}>
        <h1 className={styles.logo}> Welcome to Product Shop<span>.</span></h1>
        <div className={styles.navLinks}>
          <button className={view === "shop"     ? styles.navActive : styles.navBtn} onClick={() => setView("shop")}>Products</button>
          <button className={view === "wishlist" ? styles.navActive : styles.navBtn} onClick={() => setView("wishlist")}>
            ♡ Wishlist {wishlist.length > 0 && <span className={styles.navBadge}>{wishlist.length}</span>}
          </button>
          <button className={view === "cart"     ? styles.navActive : styles.navBtn} onClick={() => setView("cart")}>
            🛒 Cart {cart.length > 0 && <span className={styles.navBadge}>{cart.length}</span>}
          </button>
        </div>
      </nav>

      {/* ── SHOP VIEW ─────────────────────────────────────── */}
      {view === "shop" && (
        <section className={styles.grid}>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <div key={i} className={styles.skeleton} />)
            : products.map(product => (
                <article key={product.id} className={styles.card}>

                  <div className={styles.cardImg} onClick={() => openModal(product)}>
                    <img src={product.thumbnail} alt={product.title} />
                    {product.discountPercentage > 0 && (
                      <span className={styles.discountBadge}>-{Math.round(product.discountPercentage)}%</span>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.brand}>{product.brand ?? product.category}</p>
                    <h2 className={styles.title} onClick={() => openModal(product)}>{product.title}</h2>
                    <Stars rating={product.rating} />
                    <div className={styles.cardFooter}>
                      <span className={styles.price}>${product.price}</span>
                      <div className={styles.actions}>
                        <button
                          className={isWishlisted(product.id) ? styles.wishlisted : styles.wishBtn}
                          onClick={() => toggleWishlist(product)}
                        >
                          {isWishlisted(product.id) ? "♥" : "♡"}
                        </button>
                        <button
                          className={isInCart(product.id) ? styles.inCartBtn : styles.cartBtn}
                          onClick={() => addToCart(product)}
                        >
                          {isInCart(product.id) ? "✓ Added" : "Add to cart"}
                        </button>
                      </div>
                    </div>
                  </div>

                </article>
              ))
          }
        </section>
      )}

      {/* ── WISHLIST VIEW ──────────────────────────────────── */}
      {view === "wishlist" && (
        <section className={styles.listView}>
          <h2 className={styles.viewTitle}>Your Wishlist</h2>
          {wishlist.length === 0
            ? <p className={styles.empty}>No items saved yet.</p>
            : <div className={styles.grid}>
                {wishlist.map(product => (
                  <article key={product.id} className={styles.card}>
                    <div className={styles.cardImg} onClick={() => openModal(product)}>
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className={styles.cardBody}>
                      <p className={styles.brand}>{product.brand ?? product.category}</p>
                      <h2 className={styles.title}>{product.title}</h2>
                      <div className={styles.cardFooter}>
                        <span className={styles.price}>${product.price}</span>
                        <div className={styles.actions}>
                          <button className={styles.cartBtn}   onClick={() => addToCart(product)}>Add to cart</button>
                          <button className={styles.removeBtn} onClick={() => toggleWishlist(product)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
          }
        </section>
      )}

      {/* ── CART VIEW ─────────────────────────────────────── */}
      {view === "cart" && (
        <section className={styles.listView}>
          <h2 className={styles.viewTitle}>Your Cart</h2>
          {cart.length === 0
            ? <p className={styles.empty}>Your cart is empty.</p>
            : <>
                <div className={styles.cartList}>
                  {cart.map(item => (
                    <div key={item.id} className={styles.cartRow}>
                      <img src={item.thumbnail} alt={item.title} className={styles.cartThumb} />
                      <div className={styles.cartInfo}>
                        <p className={styles.cartName}>{item.title}</p>
                        <p className={styles.cartMeta}>${item.price} each</p>
                      </div>
                      <div className={styles.qtyControl}>
                        <button onClick={() => changeQty(item.id, -1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => changeQty(item.id, +1)}>+</button>
                      </div>
                      <span className={styles.cartItemTotal}>${(item.price * item.qty).toFixed(2)}</span>
                      <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                    </div>
                  ))}
                </div>
                <div className={styles.cartSummary}>
                  <span>Total</span>
                  <strong>${cartTotal}</strong>
                </div>
                <button className={styles.checkoutBtn}>Proceed to Checkout</button>
              </>
          }
        </section>
      )}

      {/* ── MODAL ─────────────────────────────────────────── */}
      {modal && (
        // clicking the dark backdrop closes the modal
        <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className={styles.modal}>

            <button className={styles.closeBtn} onClick={closeModal}>✕</button>

            <div className={styles.modalLeft}>
              <img
                src={modal.images?.[activeImg] ?? modal.thumbnail}
                alt={modal.title}
                className={styles.modalMainImg}
              />
              <div className={styles.thumbRow}>
                {modal.images?.slice(0, 4).map((img, i) => (
                  <img
                    key={i} src={img} alt={`view ${i + 1}`}
                    className={i === activeImg ? styles.thumbActive : styles.thumb}
                    onClick={() => setActiveImg(i)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.modalRight}>
              <p className={styles.modalBrand}>{modal.brand ?? modal.category}</p>
              <h2 className={styles.modalTitle}>{modal.title}</h2>
              <Stars rating={modal.rating} />
              <p className={styles.modalPrice}>${modal.price}</p>
              <p className={styles.modalDesc}>{modal.description}</p>

              <div className={styles.metaTable}>
                {[
                  ["Category", modal.category],
                  ["Stock",    modal.stock],
                  // ["weight",      modal.weight],
                  ["Warranty", modal.warrantyInformation],
                  ["Shipping", modal.shippingInformation],
                  ["Return",   modal.returnPolicy],
                ].filter(([, val]) => val).map(([label, val]) => (
                  <div key={label} className={styles.metaRow}>
                    <span className={styles.metaLabel}>{label}</span>
                    <span className={styles.metaVal}>{val}</span>
                  </div>
                ))}
              </div>

              <div className={styles.modalActions}>
                <button
                  className={isWishlisted(modal.id) ? styles.wishlisted : styles.wishBtn}
                  onClick={() => toggleWishlist(modal)}
                >
                  {isWishlisted(modal.id) ? "♥ Wishlisted" : "♡ Wishlist"}
                </button>
                <button
                  className={isInCart(modal.id) ? styles.inCartBtn : styles.cartBtn}
                  onClick={() => addToCart(modal)}
                >
                  {isInCart(modal.id) ? "✓ In Cart" : "Add to Cart"}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Products;