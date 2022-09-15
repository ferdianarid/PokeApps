import React from 'react'
import { PageWrapper } from '@/components/atoms/Container'

const PageLayouts = ({ children }) => {
    return (
        <React.Fragment>
            <PageWrapper>
                {children}
            </PageWrapper>
        </React.Fragment>
    )
}

export default PageLayouts