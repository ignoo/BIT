import Daiktas from "./daiktas";

export default function Tvenkinys() {


    return <>
        <div className="container">
            <Daiktas props = {'lyginiai'}/>
        </div>
        <div className="container">
            <Daiktas props = {'nelyginiai'}/>
        </div>
    </>
}