import { observer } from 'mobx-react';
import membersStore from '../stores/memberStore';
import MemberItem from './MemberItem';
import { Route, Routes, Link } from 'react-router-dom';

function MemberList(){
    const membersList = membersStore.members.map((member) => <MemberItem key={member._id} member={member} />);
    
    return(
        <div>
            <div className='mem-list MPage'>
            {/* <Routes>
                <Route exact path="/MemberInfo/:memberSlug" element={membersList} />
            </Routes> */}
            {membersList}
            </div>
        </div>
    );
}

export default observer(MemberList);