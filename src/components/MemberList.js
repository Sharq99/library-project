import { observer } from 'mobx-react';
import membersStore from '../stores/memberStore';
import MemberItem from './MemberItem';

function MemberList(){
    const membersList = membersStore.members.map((member) => <MemberItem key={member._id} member={member} />);
    
    return(
        <div>
            <div className='mem-list'>{membersList}</div>
        </div>
    );
}

export default observer(MemberList);