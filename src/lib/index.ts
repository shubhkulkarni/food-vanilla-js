import events from "./events/events";
import Lib from "./core/library";
import UseState from "./state/state";
import  {IComponentProps,TComponentFunction,IRoute}  from "./types/types";
import router from "./routing/routing";

const link = router.link;

if (!window)
  throw new Error("stateful-dom library works only on browser!");

export { events, Lib, UseState,router,link};
export type { IComponentProps,TComponentFunction,IRoute };

