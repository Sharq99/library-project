import memberStore from '../stores/memberStore';
import MemberList from './MemberList';
import AddMemberModal from './AddMemberModal';
function MemberPage(){
    return(
        <div>
            <div className="MPage">
                <h1>Members</h1>
                <AddMemberModal/>
            </div>
            <MemberList/>
        </div>
    );
}

export default MemberPage;