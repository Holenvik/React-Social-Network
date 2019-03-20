import React from "react";
import profile from "./Info.module.css";
import {connect} from "react-redux";

const Info = (props) => {
    let {contact} = props;
    let {profileInfo} = contact;
    let{fullName} = profileInfo;
    return (
        <div className={profile.content__profile}>
            <div className={profile.profile__photo}>
                <img src={contact.picture} alt="Person"/>
            </div>
            <div className={profile.profile__info}>
                <div className={profile.profile__name}>
                    <p>{fullName}</p>
                </div>
                <div className={profile.profile__add}>

                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        contact: state.profilePage,
    }
};

export default connect(mapStateToProps, null)(Info);
