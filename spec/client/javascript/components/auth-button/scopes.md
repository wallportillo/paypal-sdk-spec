# Scopes

The `scope` prop is used to request specific information about a user.

```javascript
paypal.AuthButton({
    scopes: ['openid', 'profile', 'email', 'address', 'phone']
    // add rest of your props here
});
```

## Common Scopes

The following table shows how user attributes map to scopes.

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
</tbody>
</table></div>
