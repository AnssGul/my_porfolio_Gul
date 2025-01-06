export function Profile({ isDarkMode }) {
    return (
        <img
            src="/images/profile.jpg"
            alt="Muhammad Anus Gul"
            style={{
                width: '202px',
                height: '202px',
                borderRadius: '50%',
                marginBottom: '20px',
                boxShadow: isDarkMode
                    ? '0 4px 8px rgba(255, 255, 255, 0.2)'
                    : '0 4px 8px rgba(0, 0, 0, 0.2)',
                border: isDarkMode ? '4px solid #ffffff' : 'none',
            }}
        />
    );
}
export default Profile;