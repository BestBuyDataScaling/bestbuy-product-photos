module.exports = {
  apps: [{
    name: 'champagne',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-15-234-135.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/front-end-capstone.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/productInfo-photos_service.git',
      path: '/home/ubuntu/champagne',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}