// src/js/custom.js
import $ from 'jquery';

export default function customFunction() {
  const originalTexts = {};

  function translateText(text, targetLang, callback) {
    $.ajax({
      url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`,
      success: function (result) {
        if (result[0] !== undefined && result[0] !== null) {
          const translatedText = result[0][0][0];
          callback(translatedText);
        } else {
          callback('');
        }
      },
      error: function (err) {
        console.error(`Error translating text: ${err}`);
        callback('');
      }
    });
  }

  function getTextNodes(element, textNodes = []) {
    $(element).contents().each(function () {
      if (this.nodeType === Node.TEXT_NODE && $.trim(this.nodeValue) !== '' && /[a-zA-Z]/.test(this.nodeValue)) {
        textNodes.push(this);
      } else if (this.nodeType === Node.ELEMENT_NODE && !$(this).is('.language01, .language01 *, .no-translate, .no-translate *')) {
        getTextNodes(this, textNodes);
      }
    });
    return textNodes;
  }

  function getPlaceholderTexts() {
    const placeholders = [];
    $('input[placeholder], textarea[placeholder]').each(function () {
      placeholders.push({
        element: this,
        text: $(this).attr('placeholder')
      });
    });
    return placeholders;
  }

  function translatePage(targetLang) {
    const textNodes = getTextNodes($('body'));
    const placeholders = getPlaceholderTexts();

    textNodes.forEach((node, index) => {
      const originalText = originalTexts['textNode-' + index];
      translateText(originalText, targetLang, function (translatedText) {
        node.nodeValue = translatedText;
      });
    });

    placeholders.forEach((placeholder, index) => {
      const originalText = originalTexts['placeholder-' + index];
      translateText(originalText, targetLang, function (translatedText) {
        $(placeholder.element).attr('placeholder', translatedText);
      });
    });

    // RTL/LTR logic
    if (targetLang === 'ar' || targetLang === 'ur') {
      $('body, header, footer, section').addClass('RTL');
      $('input, textarea').attr('lang', 'ar').attr('dir', 'rtl');
    } else {
      $('body, header, footer, section').removeClass('RTL');
      $('input, textarea').attr('lang', 'en').attr('dir', 'ltr');
    }
  }

  // Close language dropdown on outside click
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.language-dropdown').length) {
      $('#language-toggle').prop('checked', false);
    }
  });

  // Store original text
  const textNodes = getTextNodes($('body'));
  const placeholders = getPlaceholderTexts();
  textNodes.forEach((node, index) => {
    originalTexts['textNode-' + index] = node.nodeValue;
  });
  placeholders.forEach((placeholder, index) => {
    originalTexts['placeholder-' + index] = placeholder.text;
  });

  // On language dropdown item click
  $('.language-dropdown-item').click(function () {
    const selectedLang = $(this).data('lang');
    localStorage.setItem('selectedLanguage', selectedLang);
    window.location.reload();
  });

  // On page load
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage && savedLanguage !== 'en') {
    translatePage(savedLanguage);
  }

  $('.language-dropdown-item').each(function () {
    if ($(this).data('lang') === savedLanguage) {
      $(this).addClass('active');
    }
  });
}
