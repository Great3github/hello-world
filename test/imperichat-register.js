const fetch = require('node-fetch')
// will expire
const token =
'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlM2FlZWUyYjVjMDhjMGMyODFhNGZmN2RjMmRmOGIyMzgyOGQ1YzYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2VhbiBZZW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pjYmh6QmVRNFM0NmpoYlJiSkVVYTAyYkNtZnVpME53eldKdGRjZUtGa0wyU255NXkyZFlPTkxEcmp3X0xRYm5kUThTaTQtVmY3bllOYzVWTThiQllvRS1qMDJ0Q194QWxLMlBXRXd4bkZqSUFNZlYzeHFtZVMwZm1LQUkxTXl0S0lGLUJpNFJGbGhlX2hDN01vUXRBZVVwcHp0MXdvOHR5TV9XQTJrdHFUdWxSbHVzZUIxV1o0ZjhkLXBwcDl4enR1Vk5TTzFRMzlaMlRSSEtVM19kVTI3QUpMaWdpaXlqOE5xNjBuMjhPdmtIeC1HT2duSFZWU09iQ1EyaWpFNjc1N2VETjJYTHFhVnNGSDF4OWRxanNVeWNRRkMwMFdfbDNnUWtfOWVuT1ZYa1hXNjczemNmb2tvY3NWMjZiTGN1VjYwS1dGa0c0UnR3Y1psWG85cjI1Q0xBQWhsWm43M0dkLTJjMWZhd2plQXR4dUZJd1dxVmR0bGlWa2lQMTZYZGE5Y2ZmTlhDWEdobnBkdlVUcW9wT0lCLVV6b0d1N1AzSGJybDRSS2F2c2xKb0JJX0U1ZFVsenJNUzZ2M2w2d3owRlFNYjR6N1VpdE1zS25WR2dDeGNVZ3lrd3ZqM21qNVA5eDVrQkZseVA5cnI3LThrSTBxdzJwMUFvdWp2YkR4eVZxbm1wanhVc2pJcl92SGNXTHZSNk1MWTlyRVYzNHh2eVk2NWNqazFDZjVGSERvcWRhMnBUZGR1Yml2YWFjdzZ3X29zSHgzajZmZ2tTbnhHcDZmbzdGckFMRW42MmN5SjhJcXdCMUJ6dXhUc19PZ0JZWUllVVh0WUNDSGl3YXItZ2lLa0w2SXpLSnVCaW9ORS04NVJrak1IYlBVd2sxOUxMeS11RGdaZmNRZ2V2VFdoVTFtTHd5VVkwajc3dUpMcnhNanFITThwT2pyd18tdTFRZHNKeGMxdjJzemRzRjJmZFlPd3B1Y2VmWExqdi0wS0g3QWYtM2NpQlprOXRDeTBmZGc9czk2LWMiLCJzZ3kiOnsiYWNjZXNzS2V5IjoiOTNiZWJjYjNjZTUwZTcxMTUxZmQ0NmM5Nzg2ZjdhNzMwNWY3ZmI4ZTgiLCJhY2Nlc3NTZWNyZXQiOiIwMTM1OThkNjA4OWQzNDZlZTVhYmNhZDU1NDY2MzA3ZiJ9LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaW1wZXJpY2hhdCIsImF1ZCI6ImltcGVyaWNoYXQiLCJhdXRoX3RpbWUiOjE2MDIyMDU5MzAsInVzZXJfaWQiOiIyMDE3MjE5Iiwic3ViIjoiMjAxNzIxOSIsImlhdCI6MTYwMjkwOTg3NywiZXhwIjoxNjAyOTEzNDc3LCJlbWFpbCI6InN5MjQ0ODRAcGF1c2QudXMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwOTI3NjY3MjQ0MDEwOTkwNDc0MiJdLCJlbWFpbCI6WyJzeTI0NDg0QHBhdXNkLnVzIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.JBDNtFvYHydfrwVkvr5lmVMOZcTpHYp5M5i3aUl5QGKOQpPEGOkB7UP7yTIbXEv73qLfFJFQOtcL0-PesU6LwsyBJRKk6AJQOQ_xRC5O403hE-ISdGEXpLcxHgljIELipLKAqeB9a3Auo0uIkzZaTLrH5ljt2ImdRoqp7JuDsBSj9DHO5oN3zmbLGjDBRul22y3rSZtxzBUB9hX86u_LC7sB1MqtN_bCSP0Ivqiw7MTfy5eH_kBhuOdPE4PfgPUyCByGsSh9Vtz0nNE64W5PECXcC77zVStvoTgMEKBJooeSuc3AjKFQ9aOPCCJGiJ5P-ebkz7zwphB_b-tKZN9Jfw'
fetch(
  'https://mangoice.herokuapp.com/imperichat/bot/create',
  // 'https://httpbin.org/post',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      bot: {
        name: 'Official Imperichat Bot',
        password: 'piñata u\nau|\n~~~',
        photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Jane_lathrop_stanford_middle_school_may_2020.jpg/320px-Jane_lathrop_stanford_middle_school_may_2020.jpg'
      },
      token
    })
  }
).then(r => r.text()).then(console.log)

