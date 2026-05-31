import { useState } from "react";
import ClassBased from "./allTopics/01_Types-of-components/ClassBased";
import FunctionBased from "./allTopics/01_Types-of-components/FunctionBased";
import CounterFBC from "./allTopics/02_States/CounterFBC";
import Heart from "./allTopics/02_States/Heart";
import StatesInCBC from "./allTopics/02_States/StatesInCBC";
import StatesInFBC from "./allTopics/02_States/StatesInFBC";
import ToggleComponent from "./allTopics/02_States/Toggle";
import Parent1 from "./allTopics/03_Props/Parent1";
import DrillingParent from "./allTopics/04_PropsDrilling/DrillingParent";
import CallbackParent from "./allTopics/05_callbacks/CallbackParent";
import UpliftingParent from "./allTopics/06_StateUplifting/UpliftingParent";
import UserLists from "./allTopics/07_Lists/UserLists";
import ControlledForms1 from "./allTopics/08_ControlledForms/ControlledForms1";
import ControlledForms2 from "./allTopics/08_ControlledForms/ControlledForms2";
import Card from "./allTopics/09_ReactCss/Card";
import InlineCss from "./allTopics/09_ReactCss/InlineCss";
import DisplayTodo from "./allTopics/10_todoApp/DisplayTodo/DisplayTodo";
import TodoWrapper from "./allTopics/10_todoApp/TodoWrapper";
import UncontrolledForms from "./allTopics/11_UncontrolledForms/UncontrolledForms";
import LifeCycleInCBC from "./allTopics/12_LifeCycle/LifeCycleInCBC";
import LifeCycleInFBC from "./allTopics/12_LifeCycle/LifeCycleInFBC";
import Users from "./allTopics/12_LifeCycle/Users";
// import Products from "./allTopics/13_Fetch/Products";
// import Products from "./allTopics/14_productTask/Products";
import Reducer from "./allTopics/15_Reducer/Reducer"
import Hero from "./allTopics/16_Context/Hero"
import ContextProvider from "./allTopics/16_Context/ContextExample";
import CounterProvider, { CounterContext } from "./allTopics/16_Context/CounterProvider";
import Counter from "./allTopics/16_Context/Counter";
// import Task from "./allTopics/17_Task/Task";
// import  {UserContextProvider}  from "./allTopics/17_Task/context/UserContextProvider";
// import Routing1 from "./allTopics/18_Routing/Routing1";
// import Routing2 from "./allTopics/18_Routing/Routing2";
import Products from "./allTopics/19_CustomHook/products";

const App = () => {
  const [toggle,setToggle]= useState(false);
  const handelToggle= () => setToggle((prev) => !prev);
  return (
    <>
      {/* { <FunctionBased /> } */}
      {/* <ClassBased /> */}
      {/* <StatesInFBC /> */}
      {/* <Heart /> */}
      {/* <ToggleComponent /> */}
      {/* <CounterFBC /> */}
      {/* <StatesInCBC /> */}
      {/* <Parent1 /> */}
      {/* <DrillingParent /> */}
      {/* <CallbackParent /> */}
      {/* <UpliftingParent /> */}
      {/* <UserLists/> */}
      {/* <ControlledForms1/> */}
      {/*<ControlledForms2 /> */}
      {/* <InlineCss /> */}
      {/* <Card /> */}
      {/* {<TodoWrapper/>} */}
      {/* {<UncontrolledForms/>} */}
      {/* <button onClick={handelToggle}>toggle me</button>
      {toggle && <LifeCycleInCBC/>} */}
      {/* {<LifeCycleInFBC/>} */}
      {/* <button onClick={handelToggle}>toggle me</button>
      {toggle && <Users/>} */}
      {/* <button onClick={handelToggle}>toggle me</button>
      {toggle && <Products/>} */}
      {/* {<Products/>} */}
      {/* {<Reducer/>} */}
      {/* <ContextProvider>
      <Hero/>

      </ContextProvider> */}
      {/* <CounterProvider>
        <Counter/>
      </CounterProvider> */}

      {/* <UserContextProvider>
      <Task/>
      </UserContextProvider> */}
      {/* <Routing1/> */}
      {/* <Routing2/> */}
      <Products/>
    </>
  );
};

export default App;