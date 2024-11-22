# Roma Rakamı Dönüştürücü: Basit Bir Web Uygulaması

Bu basit web uygulaması, ondalık sayıları Roma rakamlarına dönüştürür.

## Nasıl Kullanılır:

1. Sayı Girin: Sağlanan giriş alanına 1 ile 3999 arasında bir sayı girin.
2. Dönüştür'e Tıklayın: Dönüştürme işlemini başlatmak için "Dönüştür" düğmesine basın.
3. Sonucu Görüntüleyin: Dönüştürülen Roma rakamı çıktı alanında gösterilecektir.

## Nasıl Çalışır:

- Giriş Doğrulama: Uygulama, giriş yapılan sayının geçerli olup olmadığını kontrol eder. 1 ile 3999 arasında pozitif bir tam sayı olmalıdır.
- Roma Rakamı Dönüşümü: convertToRoman fonksiyonu, ondalık sayıyı Roma rakamına dönüştürmek için açgözlü bir algoritma kullanır. Roma rakamları ve karşılık gelen ondalık değerleri içeren bir dizi üzerinde iterasyon yapar ve girdi sayısından mümkün olan en büyük Roma rakamı değerini çıkararak sayı sıfıra ulaşana kadar devam eder.
- Çıktı Görüntüleme: Dönüştürülen Roma rakamı çıktı alanında gösterilir.

## Kod Yapısı:

- HTML: Sayfanın yapısını oluşturur, giriş alanları, düğmeler ve çıktı alanlarını içerir.
- CSS: Sayfa öğelerini biçimlendirerek görsel olarak çekici bir arayüz oluşturur.
- JavaScript: Kullanıcı girişini işler, dönüştürme işlemini gerçekleştirir ve çıktıyı günceller.
