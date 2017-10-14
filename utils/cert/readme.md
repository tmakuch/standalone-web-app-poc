# Create self-signed certificate with custom central authority using openssl

## Steps:
1. Create Central Authority certificate
2. Create server certificate
3. Update server certificate with CA certificate (note different config)
4. Generate CA crt file for windows
5. Copy servercert.pem and serverkey.pem to config/https and rename cert.pem and key.pem (or update browsersync config).

### Create Central Authority certificate
```
openssl req -x509 -config ca.cfg -newkey rsa:4096 -sha256 -out cacert.pem -outform PEM
```

### Create server certificate
```
openssl req -config server.cfg -newkey rsa:2048 -sha256 -nodes -out servercert.csr -outform PEM
```

### Update server certificate with CA certificate (note different config)
```
openssl ca -config ca2.cfg -policy signing_policy -extensions signing_req -out servercert.pem -infiles servercert.csr
```

### Generate CA crt file for windows
```
openssl x509 -outform der -in cacert.pem -out ca.crt
```