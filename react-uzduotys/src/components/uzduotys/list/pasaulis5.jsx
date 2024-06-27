import Akvariumas5 from "./akvariumas5";
import Garazas5 from "./garazas5";
import Namas5 from "./namas5";
import Narvas5 from "./narvas5";

export default function Pasaulis5({masyvas}) {


    return <>
        <div className="container">
            <span>NELYGINIAI</span>
            <div className="kontik">
                <span>man</span>
                <Namas5 masyvas={masyvas} props={'nelyginis'}/>
            </div>
            <div className="kontik">
                <span>car</span>
                <Garazas5 masyvas={masyvas} props={'nelyginis'}/>
            </div>
            <div className="kontik">
                <span>animal</span>
                <Narvas5 masyvas={masyvas} props={'nelyginis'}/>
            </div>
            <div className="kontik">
                <span>fish</span>
                <Akvariumas5 masyvas={masyvas} props={'nelyginis'}/>
            </div>

        </div>
        <div className="container">
            <span>LYGINIAI</span>
            <div className="kontik">
                <span>man</span>
                <Namas5 masyvas={masyvas} props={'lyginis'}/>
            </div>
            <div className="kontik">
                <span>car</span>
                <Garazas5 masyvas={masyvas} props={'lyginis'}/>
            </div>
            <div className="kontik">
                <span>animal</span>
                <Narvas5 masyvas={masyvas} props={'lyginis'}/>
            </div>
            <div className="kontik">
                <span>fish</span>
                <Akvariumas5 masyvas={masyvas} props={'lyginis'}/>
            </div>

        </div>
    </>
}