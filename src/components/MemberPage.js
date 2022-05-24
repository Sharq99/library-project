import MemberList from './MemberList';
import AddMemberModal from './AddMemberModal';
import membersStore from '../stores/memberStore';
function MemberPage(){
    const members = membersStore.members;
    return(
        <div className="MPage">
            <div>
                <h1>⚜ Members ⚜</h1>
                <AddMemberModal />
            </div>
            <MemberList members={members}/>
        </div>
    );
}

export default MemberPage;