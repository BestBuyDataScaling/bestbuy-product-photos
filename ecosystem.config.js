module.exports = {
  apps: [{
    name: 'productInfo-photos_service',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-216-28.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/front-end-capstone.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/productInfo-photos_service.git',
      path: '~/productInfo-photos_service',
      'post-deploy': 'nonsensical && npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}