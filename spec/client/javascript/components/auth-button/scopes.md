### Scopes

The merchant will provide a list of scopes to integrate with the AuthButton.
<div><h2 id="scope-attributes">Scope attributes</h2>
<p>The following shows how user attributes map to OpenID Connect protocols:</p>
<table>
<thead>
<tr>
<th>User attribute</th>
<th>Category</th>
<th>Scope value</th>
</tr>
</thead>
<tbody>
<tr>
<td>None</td>
<td>Basic Authentication</td>
<td><code>openid</code></td>
</tr>
<tr>
<td>Full name</td>
<td>Personal Information</td>
<td><code>profile</code></td>
</tr>
<tr>
<td>Email address</td>
<td>Address Information</td>
<td><code>email</code></td>
</tr>
<tr>
<td>Street address</td>
<td>Address Information</td>
<td><code>address</code></td>
</tr>
<tr>
<td>City</td>
<td>Address Information</td>
<td><code>address</code></td>
</tr>
<tr>
<td>State</td>
<td>Address Information</td>
<td><code>address</code></td>
</tr>
<tr>
<td>Country</td>
<td>Address Information</td>
<td><code>address</code></td>
</tr>
<tr>
<td>Zip code</td>
<td>Address Information</td>
<td><code>address</code></td>
</tr>
<tr>
<td>Account verification status</td>
<td>Account Information</td>
<td><a href="https://uri.paypal.com/services/paypalattributes">https://uri.paypal.com/services/paypalattributes</a><br><br>This tells you if the customer has a verified PayPal account.</td>
</tr>
<tr>
<td>PayPal account ID (payer ID)</td>
<td>Account information</td>
<td><a href="https://uri.paypal.com/services/paypalattributes">https://uri.paypal.com/services/paypalattributes</a><br><br>This is the user's unique PayPal account ID used in PayPal APIs such as the Payouts API</td>
</tr>
</tbody>
</table></div>

```javascript
    paypal.AuthButton(
      {
        scopes: ["openid", "profile", "email", "address", "phone"],
        // add rest of your props here
      });
```