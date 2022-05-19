import membersStore from '../stores/memberStore';

function MemberItem({ member }){
    let m1 = member.firstName;
    let m2 = member.lastName;
    let result = m1.concat(" ",m2);
    return(
        <div>
            <h2 className="mem-item">{result}</h2>
        </div>
    );
}

export default MemberItem;