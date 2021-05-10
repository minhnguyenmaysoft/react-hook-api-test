import * as React from "react";
import { render } from "react-dom";
import CounterComponent from "./counter.component";
import EmployeesComponent from "./employees.component";

declare module "react" {
  /**
   * State hook. Returns a stateful value, and a function to update it.
   */
  export function useState<TValue>(
    initialState: TValue
  ): [TValue, (value: TValue) => void];
  /**
   * Accepts a function that contains imperative, possibly effectful code.
   */
  export function useEffect(didUpdate: () => void | (() => void)): void;
}

const App = () => {
  return (
    <>
      <CounterComponent />

      <div>=================</div>
      <EmployeesComponent />
    </>
  );
};

render(<App />, document.getElementById("root"));
