import { useLocation } from "react-router";
import { ButtonComp } from "../../components";
import styles from "../../styles/pages/viewUser.module.scss";
import { useNavigate } from "react-router-dom";
import { BackIcon, ProfileIcon } from "../../assets";

export const ViewUser = () => {
  const location = useLocation();
  const userDetails = location.state.value as IUser;
  const navigate = useNavigate();

  return (
    <div className={styles.ViewUser}>
      <div className={styles.back_icon} onClick={() => navigate(-1)}>
        <BackIcon />
        <p>Back to Users</p>
      </div>
      <div className={styles.flexbox}>
        <p className={styles.header}>User Details</p>
        <div className={styles.button_wrap}>
          <ButtonComp
            text={`${userDetails.status} USER`}
            className={styles[userDetails.status.toLowerCase()]}
          />
        </div>
      </div>
      <div className={styles.content_wrap}>
        <div className={styles.profile_wrap}>
          <div className={styles.profile_flex}>
            <div className={styles.box}>
              <div className={styles.profile_icon}>
                <ProfileIcon />
              </div>
              <div className={styles.row}>
                <p className={styles.title}>{userDetails.fullName}</p>
                <p className={styles.text}>{userDetails.maritalStatus}</p>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.box}>
              <div className={styles.row}>
                <p className={styles.text}>User's Tier</p>
                <p className={styles.text}></p>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.box}>
              <div className={styles.row}>
                <p className={styles.title}>
                  ₦{userDetails.education.monthlyIncome}
                </p>
                <p className={styles.text}>
                  {userDetails.education.levelOfEducation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.heading}>Personal Information</p>
          <div className={styles.wrap}>
            <div className={styles.col}>
              <p className={styles.title}>Full Name</p>
              <p className={styles.text}>{userDetails.fullName}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Phone Number</p>
              <p className={styles.text}>{userDetails.phone}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Email Addresss</p>
              <p className={styles.text}>{userDetails.email}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>BVN</p>
              <p className={styles.text}>{userDetails.bvn}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Genter</p>
              <p className={styles.text}>{userDetails.gender}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Marital Status</p>
              <p className={styles.text}>{userDetails.maritalStatus}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Children</p>
              <p className={styles.text}>{userDetails.children}</p>
            </div>
          </div>
          <p className={styles.heading}>Education and Employment</p>
          <div className={styles.wrap}>
            <div className={styles.col}>
              <p className={styles.title}>Level of Education</p>
              <p className={styles.text}>
                {userDetails.education.levelOfEducation}
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Sector of Employment</p>
              <p className={styles.text}>
                {userDetails.education.sectorOfEmployment}
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Duration of Employment</p>
              <p className={styles.text}>
                {userDetails.education.durationOfEmployment}
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Official Email</p>
              <p className={styles.text}>
                {userDetails.education.officialMail}
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Monthly Income</p>
              <p className={styles.text}>
                {userDetails.education.monthlyIncome}
              </p>
            </div>
          </div>
          <p className={styles.heading}>Socials</p>
          <div className={styles.wrap}>
            <div className={styles.col}>
              <p className={styles.title}>Twitter</p>
              <p className={styles.text}>{userDetails.socials.twitter}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Facebook</p>
              <p className={styles.text}>{userDetails.socials.facebook}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Instagram</p>
              <p className={styles.text}>{userDetails.socials.instagram}</p>
            </div>
          </div>
          <p className={styles.heading}>Guarantor</p>
          {userDetails?.guarantor?.map((guarantor, index) => (
            <div className={styles.wrap} key={index}>
              <div className={styles.col}>
                <p className={styles.title}>Full Name</p>
                <p className={styles.text}>{guarantor.fullName}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.title}>Phone Number</p>
                <p className={styles.text}>{guarantor.phoneNumber}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.title}>Email Address</p>
                <p className={styles.text}>{guarantor.email}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.title}>Relationship</p>
                <p className={styles.text}>{guarantor.relationship}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
