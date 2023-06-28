import Layout from "../components/shared/Layout";
import ProfileLayout from "../components/profile/Layout";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import BookmarkedYachtsComponent from "../components/profile/BookmarkedYachtComponent";

const BookmarkedYachts = () => {
  return (
    <Layout>
      <ProfileLayout>
        <ProfileNavbar />
        <BookmarkedYachtsComponent />
      </ProfileLayout>
    </Layout>
  );
};

export default BookmarkedYachts;
