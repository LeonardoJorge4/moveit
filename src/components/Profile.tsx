import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

const Profile = () => {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LeonardoJorge4.png" alt="Leonardo Jorge"/>
            <div>
                <strong>Leonardo Jorge</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Up"/>
                    Level { level }</p>
            </div>
        </div>
    )
}

export default Profile
