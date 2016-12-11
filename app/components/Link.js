export default const Link = ({ children, active, onClick }) => {
  if (active) {
    return <span>{children}</span>
  } else {
    <a href='#'
    onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
    {children}
  </a>
  }
}

cconst propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Object.assign(Link, propTypes)