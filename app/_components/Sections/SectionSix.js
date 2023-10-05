import React from 'react'

function SectionSix() {
    return (
        <section className='w-[100vw] h-[100vh] pt-[100px] flex flex-col justify-start items-center border-b' >
            <h2 className='text-2xl text-center mb-10 border-b border-b-[orange] pb-1' >Teklif Almak için Aşağıdaki Formu Doldurun</h2>
            <Form />
        </section>
    )
}

export default SectionSix





function Form() {
    return (

        <div className='flex flex-col justify-center items-center mr-10 bg-slate-100 px-6 py-6'>

            <input placeholder='Adınız ve Soyadınız...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />
            <input placeholder='Telefon Numaranız...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />
            <input placeholder='E-mail Adresiniz...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />
            <select className='px-3 py-2 mb-6 w-[450px] rounded-md'>
                <option>Lütfen Seçim Yapın</option>
                <option>Araç</option>
                <option>Ev</option>
                <option>İşyeri</option>
                <option>Seyahat</option>
                <option>Sağlık</option>
            </select>
            <textarea rows={10} placeholder='Durumunuzu Açıklayın...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />

        </div>
    )
}