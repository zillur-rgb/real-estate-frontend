import ProfileLayout from "../components/profile/Layout";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import Layout from "../components/shared/Layout";

const Profile = () => {
  return (
    <Layout>
      <ProfileLayout>
        <ProfileNavbar />
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
