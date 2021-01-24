db.createUser(
  {
    user: 'admin',
    pwd: 'hogehoge',
    roles: [{
      role: 'readWrite',
      db: 'savior_dev'
    }]
  }
)
