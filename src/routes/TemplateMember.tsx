import React from 'react'

const TemplateMember: React.FC = () => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'pink', fontSize: "30px", color: 'black' }}
        >
            <p>
                Bạn không có quyền truy cấp vào đường link này , Vui lòng Thoát ra .
            </p>
        </div>
    )
}

export default TemplateMember