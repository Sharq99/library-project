import { observer } from 'mobx-react';
import membersStore from '../stores/memberStore';
import MemberItem from './MemberItem';

function MemberList({ members }){
    const membersList = members.map((member) => <MemberItem key={member._id} member={member} />);
    
    return(
        <div>
            <div className='mem-list MPage'>{membersList}</div>
        </div>
    );
}

export default observer(MemberList);