# Button Layouts
    See [style](./style.md)     
## Standalone

    Standalone AuthButton allows rendering in any integration partner page. 
#### Single, standalone  LIPP PayPal button

    ```javascript
    paypal.AuthButton({ 
        responseType: 'id_token',
        style: {},
            onApprove: data => {
            // this will return the id token in the payload
            // data = { idToken: "<value>" } , { authCode : "<value>"}
            },
            onCancel : function(data){
            // console.log(data)    
            }
        }).render('#paypal-button-container');
    ```

### React

#### Single, standalone PayPal button

    ```javascript
    const App = () => {
        return (
            <AuthButton  />
        );
    }
    ```
