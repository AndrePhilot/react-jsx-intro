const Tweet = ({ username, name, date, message }) => (
    <div style={styles.tweet}>
      <p style={styles.text}>Username: {username}</p>
      <p style={styles.text}>Name: {name}</p>
      <p style={styles.text}>Date: {date}</p>
      <p style={styles.message}>Message: {message}</p>
    </div>
  );
  
  const styles = {
    tweet: {
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    text: {
      margin: '5px 0',
    },
    message: {
      fontWeight: 'bold',
    },
  };
  