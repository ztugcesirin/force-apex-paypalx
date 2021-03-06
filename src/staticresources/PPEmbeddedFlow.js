<script type="text/javascript" charset="utf-8">

    var embeddedPPFlow = new PAYPAL.apps.DGFlow({trigger: 'pay_button'});
    
    function get_full_url(url_path)
    {
        var loc = window.location;
        var url = '' + loc.protocol + '//' + loc.host + url_path;
        return url;
    }
    
      function MyEmbeddedFlow(embeddedFlow) {
              this.embeddedPPObj = embeddedFlow;
              this.paymentSuccess = function () {
                   this.embeddedPPObj.closeFlow();
                   // handle payment success here
                   //  - redirect to a success page (or)
                   //  - show another div confirming the payment (or)
                   //  - display a popup confirming the payment
                   // NOTE: the line below redirects to a success page
                   window.location.href = get_full_url('/success.html');
              };
              this.paymentCanceled = function () {
                   this.embeddedPPObj.closeFlow();
                   // handle payment cancellation here
                   //  - redirect to a cancel page (or)
                   //  - show another div messaging that payment was canceled (or)
                   //  - display a popup to retry payment again
                   // NOTE: the line below redirects to a cancellation page
                   window.location.href = get_full_url('/canceled.html');
              };
         
     }
      var myEmbeddedPaymentFlow = new MyEmbeddedFlow(embeddedPPFlow);
</script>   
