import React from 'react'

interface IMainLayoutProps {
    children: React.ReactNode
}

function MainLayout(props: IMainLayoutProps) {
    const { children } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 custom-grid-rows py-3 gap-3">
        {children}
    </div>
  )
}

export default MainLayout