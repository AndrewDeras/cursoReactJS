const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      {children}
      {myValue}
    </div>
  )
}

export default Container