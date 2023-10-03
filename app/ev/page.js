import React from 'react'

function page() {
    return (
        <div className='h-[100vh] w-[100vw]'>
            <main className='max-md:hidden h-[100vh] w-[100vw]' style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fev%20320*625.jpg?alt=media&token=663c0f1b-5885-4e8d-8533-a84029fa39db&_gl=1*qcx9ie*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDk0My4zNC4wLjA.")` }}  >
            </main>
            <main className='md:hidden h-[100vh] w-[100vw]' style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fev%201920*728.jpg?alt=media&token=281b3d6b-c9bb-4f87-98de-2e6e9e87b431&_gl=1*lt1zo0*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDk2OC45LjAuMA..")` }}  >
            </main>
        </div>

    )
}

export default page