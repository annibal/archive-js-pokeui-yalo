function Layout({ children, id, title }) {
    return (
        <div className={id}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Layout;
