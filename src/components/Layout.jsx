function Layout({ siteTitle, children, variant = 'default' }) {
  const variantClass = variant !== 'default' ? ` layout--${variant}` : ''

  return (
    <div className={`layout${variantClass}`} aria-label={`Макет сайта: ${siteTitle}`}>
      {children}
    </div>
  )
}

export default Layout
