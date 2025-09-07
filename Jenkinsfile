pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install --legacy-peer-deps'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running Mocha tests...'
                sh 'npm test'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Running ESLint...'
                sh 'npm run lint || true'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running npm audit...'
                sh 'npm run audit || true'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging (simulated)'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Integration tests on staging (simulated)'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production (simulated)'
            }
        }
    }
}

