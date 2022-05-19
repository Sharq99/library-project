import membersStore from '../stores/memberStore';

function MemberItem({ member }){
    let m1 = member.firstName;
    let m2 = member.lastName;
    let result = m1.concat(" ",m2);

    function pressed(){
        alert("you clicked me");
        console.log("you clicked me");
    }
    return(
        <div>
            <button className="mem-item MPage" onClick={() => pressed()}>{result}</button>
        </div>
    );
}

export default MemberItem;