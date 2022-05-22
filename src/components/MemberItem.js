import { Link } from 'react-router-dom';

function MemberItem({ member }){
    let m1 = member.firstName;
    let m2 = member.lastName;
    let result = m1.concat(" ",m2);

    return(
        <div className="mem-font">
            <Link to={`/member-info/${member.slug}`}>{result}</Link>
        </div>
    );
}

export default MemberItem;