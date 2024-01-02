import React from 'react'
import Image from 'next/image'
import Footer from '@/app/_components/Footer/Index'

function Dask() {
    return (
        <>
            <div className='flex justify-center items-start pt-[100px] pb-[100px] max-lg:px-7'>

                <div className='max-w-[1000px] grid grid-cols-1 gap-2' >
                    <strong></strong>

                    <h2 className='text-xl'> <strong>Kasko Yaparken Nelere Dikkat Edilmeli? </strong>  </h2>
                    <div className='grid grid-cols-1 gap-4'>
                        <p>
                            <strong> Kasko sigortası, </strong>araç sahipleri için sadece bir güvence unsuru olmanın ötesinde, finansal bir yatırım da sağlar. Bu özel sigorta türü, aracınızı beklenmedik durumlar ve riskler karşısında koruma altına almanın yanı sıra, olası maddi kayıpları minimize etme amacını güder. Ancak, bu kapsamlı koruma sağlayan sigorta poliçesini seçerken, dikkatlice değerlendirilmesi gereken bir dizi önemli faktör bulunmaktadır.
                        </p>

                        <p>
                            <strong>1. Öncelik kapsam olmalı, fiyat değil:  </strong>Sigorta poliçesi seçerken düşük fiyat cazip gelebilir, ancak düşük fiyat genellikle sınırlı bir kapsamla birlikte gelir. Örneğin, çalınma, yangın veya kaza gibi durumları içeren geniş kapsamlı bir poliçe, uzun vadede daha avantajlı olabilir. Fiyatın yanı sıra, poliçenin kapsamını da göz önünde bulundurmak önemlidir. Uygun bir fiyatla birlikte geniş kapsamlı bir poliçe seçerek, aracınızı çeşitli risklere karşı koruyabilirsiniz.
                        </p>
                        <p>
                            <strong>2. Kasko Şirketlerinin Karşılaştırması: </strong>Kasko poliçeleri arasında önemli farklar olabilir. Farklı sigorta şirketlerinin sunduğu kapsamlar, fiyatlar ve ek hizmetler konusunda detaylı bir araştırma yaparak, ihtiyaçlarınıza ve bütçenize en uygun olanı belirleyebilirsiniz.
                        </p>
                        <p>
                            <strong>3. Poliçe Detaylarını Öğrenme:</strong>İleride sigorta kapsamınızla alakalı bir sorun yaşamamak için sizlere sunulan poliçe kapsamını iyice öğrenin ve aklınıza takılan her bir soruyu sigorta şirketinize sorun. Bu durum poliçenize daha hakim olmanızı ve konuyu detaylı şekilde öğrenmenizi sağlar.
                        </p>
                        <p>
                            <strong>4. Poliçe Kapsamının Aracın Değerini Yansıtması:  </strong>Kasko poliçenizde gösterilen miktar aracınızın değerini yansıtması gereklidir. Eğer sıfır bir araba sahibiyseniz arabanızı alırken ödediğiniz miktar ile poliçe kapsamındaki miktarın aynı olması lazımdır.
                        </p>
                        <p>
                            <strong>5. Muafiyet Uygulamasının Kontrolü:  </strong> Muafiyet uygulaması kasko şirketi ile sigortayı yaptıran kişi arasında oransal olarak paylaştırılarak ödenmesidir. Bu konuda ödeyeceğiniz yüzdenin miktarına dikkat etmelisiniz.
                        </p>
                        <p>
                            <strong>6.	İkame Araç Durumu:  </strong>Bazı sigorta şirketleri aracınızın zarara uğramasını durumunda sizin mağdur olmamanız için bir araç temin eder. Bu durumda da aracınız onarılırken araçsız kalmamış olur ve bir sorunla karşılaşmamış olursunuz. (bu hizmetleri yoksa silebiliriz)
                        </p>
                        <p>
                            <strong>7. Enflasyon Sorunu:  </strong>Seçtiğiniz firmanın enflasyon kaynaklı ani artış oluşacak araç fiyatlarına karşılık sizi koruması gereklidir.
                        </p>
                        <p>
                            <strong>8. Poliçe Ödenmesi:  </strong>Kaskodan yararlanabilmek için poliçeni mutlaka ödemen ve aksatmaman gereklidir.
                        </p>
                        <p>
                            <strong>9. Hasar Süreçlerinin Kolaylığı:  </strong>Hasar durumunda sigorta şirketinizin nasıl bir süreç izlediğini bilmek önemlidir. Hasar sonrası hizmet kalitesi, çağrı merkezi erişilebilirliği ve süreçlerin şeffaflığı gibi faktörleri değerlendirerek ve sigorta şirketleri hakkında müşteri geri dönüşlerine bakarak sizin için en uygun olanı seçebilirsiniz
                        </p>
                        <p>
                            Kasko sigortası seçiminde dikkatlice değerlendirilmesi gereken bu faktörleri göz önünde bulundurmak, aracınızı kapsamlı bir şekilde güvence altına almanın yanı sıra, finansal anlamda da sağlıklı bir tercih yapmanıza olanak sağlar. Unutmayın ki, doğru bir kasko poliçesiyle yola çıkmak, güvenli ve huzurlu bir sürüş deneyimi yaşamanıza katkı sağlar.
                        </p>
                        <p>
                            Daha detaylı ve kapsamlı bilgi için bize ulaşın!
                        </p>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Dask