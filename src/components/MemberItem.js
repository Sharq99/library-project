import membersStore from '../stores/memberStore';
import MemberInfo from './MemberInfo'
import { Route, Routes, Link } from 'react-router-dom';

function MemberItem({ member }){
    let m1 = member.firstName;
    let m2 = member.lastName;
    let result = m1.concat(" ",m2);

    // const pressed = () => {
    //     <Routes>
    //         <Route exact path="/MemberInfo/:memberSlug" element={<MemberInfo member={member} result={result}/>} />
    //     </Routes>
    // }

    return(
        <div>
            {/* <button className="mem-item MPage" onClick={() => pressed()}>{result}</button> */}
            <Link to={`/member-info/${member.slug}`}>{result}</Link>
            {/* <Routes>
                <Route exact path="/MemberInfo/:aziz" element={<MemberInfo member={member} result={result}/>} />
            </Routes> */}

        </div>
    );
}

export default MemberItem;