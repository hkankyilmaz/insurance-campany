import React from 'react'
import Image from 'next/image'
import Footer from '../_components/Footer/Index'

function Index() {
    return (
        <>
            <div className='flex justify-center items-start pt-[100px] pb-[100px] max-lg:px-7'>

                <div className='max-w-[1000px] grid grid-cols-1 gap-2' >
                    <h2 className='text-xl font-bold'> KVKK Aydınlatma Metni </h2>
                    <h2 className='text-lg font-bold'>Kişisel Verilerin Korunması Hakkında Aydınlatma Metni</h2>
                    <div className='grid grid-cols-1 gap-4'>
                        <p>Bu Aydınlatma Metni, Muammer Sencer Cd. No:60E, 54300 Hendek/Sakarya adresinde kurulu Ayhan Akdağcı Sigorta (bundan sonra “Biz” veya “Şirket” olarak anılacaktır) tarafından veri sorumlusu sıfatıyla işlenen kişisel veriler hakkında ilgili kişileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında aydınlatma amacıyla hazırlanmıştır. Grup şirketlerimiz hakkında detaylı bilgiye https://www.akdagcisigorta.com/acikriza adresinden ulaşabilirsiniz.</p>
                        <p>Şirket tarafından işlenen kişisel verilerinizin KVKK’ya uygun olarak toplanması, saklanması, aktarılması da dahil olmak üzere işlenmesi, söz konusu işlemenin amacı ve KVKK kapsamındaki haklarınız ile ilgili olarak sizi bilgilendirmek isteriz.</p>
                        <h2 className='text-lg font-bold' >KİŞİSEL VERİLERİN TOPLANMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ</h2>
                        <p>Şirketimiz kişisel verilerinizi, www.akdagcisigorta.com ve diğer internet sitelerimiz, Şirketimize ve ürünlerimize ait mobil uygulamalarımız, tesislerimiz, mağazalarımız, teknik servis noktalarımız, çağrı merkezi ve diğer müşteri hizmet kanalları, sosyal medya hesaplarımız üzerinden, üyelik/iletişim kayıt formları, Şirketimizden yaptığınız alışverişler, internet sitesi destek paneli, çerezler, web analiz araçları ve benzer teknolojiler aracılığıyla vasıtasıyla, şirketimiz lokasyonlarından birini ziyaret etmeniz halinde güvenlik kameralarıyla, ziyaretçi giriş kayıtları vasıtasıyla otomatik ve otomatik olmayan yazılı, sözlü ve dijital yöntemlerle toplayabilmektedir.</p>
                        <h2 className='text-lg font-bold' >KİŞİSEL VERİLERİNİZ</h2>
                        <p>Şirketimiz tarafından işlenen kişisel verileriniz, Şirketimizle olan ilişkinize göre değişebilecek olup; ad, soyad, telefon numarası, e-posta adresi, posta adresi, satın aldığınız/kullandığınız grup şirketlerimizin ürettiği, dağıttığı veya sattığı ürünlere ilişkin bilgiler, Şirketimize mağazaları ve dijital satış kanallarından yaptığınız alışverişler ile ödeme ve fatura bilgileriniz, internet sitelerimiz ve mobil uygulamalarımız üzerinden ilettiğiniz bilgiler, yaptığınız işlemler, gezintiler ve davranışlar ile (marka, model, dil tercihi, tarayıcı bilgileri, IP, lokasyon, kablosuz bağlantı durumu gibi) kullandığınız cihaza ve internet bağlantınıza ilişkin bilgiler, çerez bilgileri, ilgi alanlarınız gibi kişisel verileriniz işlenmektedir.</p>
                        <h2 className='text-lg font-bold' >KİŞİSEL VERİLERİN İŞLENMESİ VE İŞLENME AMAÇLARI</h2>
                        <p>Kişisel verileriniz;</p>
                        <p>• Talep ettiğiniz ürün ve hizmetlerin tarafınıza sağlanması ve Şirketimizle aranızdaki sözleşmenin gerekliliklerinin yerine getirilmesi amaçlarıyla bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması hukuki sebebiyle;</p>
                        <p>• Grup şirketlerimizin ürettiği, dağıttığı veya sattığı ya da teknik servis desteği verilen ürünlere ilişkin talep, işlem ve şikayetlerin sonuçlandırılabilmesi, satış sonrası destek süreçlerinin yürütülmesi, ürün satışı, teslimi, kurulum, bakım, onarım ve satış sonrası servis hizmetlerini yerine getirmek amaçlarıyla bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması veya Şirketimizin meşru menfaati için veri işlemenin zorunlu olması hukuki sebepleriyle;</p>
                        <p>• Tedarik zinciri yönetimi süreçlerinin planlanması ve icrası, Şirket operasyon süreçlerinin planlanması ve icrası, iş ortakları ve/veya tedarikçilerle olan ilişkilerin yönetimi, ürün ve/veya hizmetlerin satış süreçlerinin planlanması ve icrası, internet sitesi ve uygulamalarımız kullanıcılarına daha iyi hizmet verebilmek, pazarlama analiz çalışmalarının yürütülmesi, müşteri memnuniyetini değerlendirmek ve arttırmak, internet siteleri, mobil uygulamalar, mağazalar ve diğer hizmet kanallarının iyileştirilmesi, firma ürün ve hizmetlere bağlılık süreçlerinin yürütülmesi, iş faaliyetlerinin yürütülmesi,  denetim, iç kontrol, hukuk, finans ve şirket içi operasyonların yürütülmesi, eğitim faaliyetlerinin yürütülmesi, organizasyon ve etkinlik yönetimi, bilgi güvenliği ve fiziksel güvenlik süreçlerinin yürütülmesi, saklama ve arşiv faaliyetlerinin yürütülmesi, faaliyetlerin mevzuata uygun yürütülmesi, Şirketimizin bağlı olduğu şirketlerin grup politikalarına uyum, şirketimiz ve yetkilendirdiği 3. kişiler tarafından gerçekleştirilen hizmetlerin kontrolünün sağlanması amaçlarıyla Şirketimizin meşru menfaati için veri işlemenin zorunlu olması;</p>
                        <p>• Şirketimizin hukuki yükümlülüklerine uyum ve ilgili/yetkili kamu kuruluşlarına gerekli bildirimlerin yapılması amaçlarıyla Şirketimizin hukuki yükümlülüklerini yerine getirebilmesi ve herhangi bir uyuşmazlık halinde bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması; pazarlanmasına yönelik genel veya kişiye özel reklam, duyuru, bülten, kampanya bilgilerini sağlamak, kutlama, temenni ve sair içeriklerle gönderilecek iletilerle Şirketimiz, markalarımız ve distribütörlüğü yaptığımız markaların tanınırlığını arttırmak, Şirketimiz ürünlerine ilişkin alışveriş alışkanlıklarınıza ve ilgi alanlarınıza göre kişiselleştirilmiş kampanya, promosyon, indirim ve avantaj, hediye çeki ve benzeri faydaların planlanması ve ilgili profil ve segmente uygun müşterilerimize önerilmesi, bunlara ilişkin reklam, tanıtım ve bilgilendirme iletisi ile memnuniyet anketi formu gönderilmesi amaçlarıyla açık rızanız</p>
                        <p>• Şirketimiz ürün ve hizmetlerinin tanıtımı ve pazarlanması, Şirketimiz tarafından sunulan kampanya, promosyon, indirim, avantaj, hediye çeki ve benzeri faydalardan yararlanabilmeniz, Şirketimiz ürünlerinin tanıtımına, </p>
                        <p>hukuki sebeplerine dayanarak işlenmektedir.</p>
                        <h2 className='text-lg font-bold' >İŞLENEN KİŞİSEL VERİLERİN ÜÇÜNCÜ KİŞİLERE AKTARILMASI</h2>
                        <p>Kişisel verileriniz yukarıda belirtilen amaçlar ve mevzuata uygun olarak söz konusu amaçlar için gerekli ve ilgili olduğu ölçüde yurtiçi ve yurtdışındaki üçüncü kişilere aktarılabilecektir. Şirketimizin standart süreçleri çerçevesinde kişisel verilerinizin yurtiçi ve yurtdışındaki kişilerle paylaşılabileceği başlıca durumlar aşağıdaki gibidir:</p>
                        <p>Kişisel verileriniz internet sitemiz ve diğer hizmet kanallarında yaptığınız işlem ve taleplerin gerçekleştirilebilmesi ve tüm kanallardan sağlıklı hizmet alabilmeniz için satış noktalarına, yetkili servislerimize, bayilerimize ve iş ortaklarımıza, “Çerez Politikası”nda belirtilen amaçlarla çerez sağlayıcı üçüncü taraflara; pazarlama, tanıtım, reklam ve iletişim gibi amaçlarla destek aldığımız firma ve ajanslara; kargo ve lojistik şirketlerine internet sitelerimiz ve mobil uygulamalarımızda yer alan fonksiyonların yerine getirilmesi ve iyileştirilmesi, anlık bildirimlerin ve SMS/e-posta iletilerinin gönderilmesi ve çağrı merkezi vb. iletişim hizmetleri için destek aldığımız hizmet sağlayıcı firmalara; Şirketimizin iç operasyonları, denetim, iç kontrol, bilişim sistemleri, hukuk ve muhasebe süreçleri ile ilgili destek hizmet aldığı danışmanlık, denetim, hukuk, bilgi teknolojileri, lojistik, arşiv vb. alanlardaki tedarikçilere ve kişisel verilerinizi talep etmeye yetkili kişi ve kurumlara aktarılabilmektedir.</p>
                        <h2 className='text-lg font-bold' >HAKLARINIZ</h2>
                        <p>KVKK’nın 11. maddesi kapsamında aşağıda sayılı haklarınız bulunduğunu hatırlatmak isteriz:</p>
                        <p>• Kişisel veri işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme,</p>
                        <p>• Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</p>
                        <p>• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</p>
                        <p>• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</p>
                        <p>• Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</p>
                        <p>• KVKK’nın ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, </p>
                        <p>• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</p>
                        <p>• Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</p>
                        <h2 className='text-lg font-bold' >İLETİŞİM</h2>
                        <p>KVKK kapsamındaki yukarıda belirtilen haklarınıza ilişkin taleplerinizi Şirketimize, kimliğinizin doğrulanması şartı ile yazılı olarak ve KVK Kurumu’nun yürürlükteki düzenlemelerine uygun olarak iletebilirsiniz. Şirketimize başvurularınızı İlgili Kişi Bilgi Talep Formu doldurarak elden veya posta yolu ile veya Şirketimiz nezdinde önceden kayıtlı e-posta adresiniz üzerinden info@akdagcisigorta.com adresine güvenli elektronik imzalı olarak iletebilirsiniz. Detaylı bilgi için ilgili formu inceleyebilirsiniz.</p>
                        <p>Başvurunuza 30 gün içerisinde dönüş sağlanacaktır. Başvurularınıza sağlıklı yanıt verilebilmesi için mevzuat gereğince başvurunuzun ad, soyad, TCKN (yabancılar için uyruk ve pasaport numarası), cevabımızı iletebileceğimiz adres bilgilerini ve kimliğinizi tevsik edici belgeleri içermesi, e-posta üzerinden başvuruyorsanız kullandığınız e-posta adresinin sistemlerimizde önceden kayıtlı olması, talebinizi belirli, açık ve anlaşılır biçimde belirtmeniz, talep ettiğiniz konunun şahsınız ile ilgili olması veya başkası adına hareket ediyor iseniz bu konuda özel olarak yetkili olmanız ve yetkinizi belgelendirmeniz gerekmektedir.</p>
                        <p>Ticari elektronik ileti alımına ilişkin verilmiş onaylar, her zaman geri alınabilir. Ticari elektronik ileti alımına ilişkin daha önceden verilmiş onayların geri alınması taleplerinizi ve iletişim tercihlerinizi, ilgili iletişim içinde belirtilen yöntemler vasıtasıyla veya eposta üzerinden Şirketimize iletebilir ya da ilgili mevzuat çerçevesinde Ticari İleti Yönetim Sistemi (İYS) platformu üzerinden iletebilirsiniz.</p>
                        <h2 className='text-lg font-bold' >AYDINLATMA METNİ’NDE YAPILACAK DEĞİŞİKLİKLER VE DEVİR</h2>
                        <p>Şirketimiz, işbu Aydınlatma Metni’nde değişiklik yapma hakkını saklı tutmaktadır. Değişiklikler yayın tarihinde yürürlüğe girecek olup, güncel Aydınlatma Metni’ne web sitemizden ulaşılabilecektir.</p>
                        <p>Şirketimiz, veri sorumlusu sıfatıyla işlemekte olduğu kişisel verilerle birlikte kısmen veya tamamen üçüncü kişilere devredebilir. Devir halinde işbu Aydınlatma Metni, herhangi bir değişiklik yapılıncaya dek aynen geçerli olacaktır.</p>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    )
}

export default Index