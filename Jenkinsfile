pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm ci'
                }
            }
        }

        stage('Test') {
            steps {
                dir('frontend') {
                    bat 'node test.js'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }
    }

    post {

        always {
            archiveArtifacts artifacts: 'backend/feedback-report.txt',
                             allowEmptyArchive: true

            archiveArtifacts artifacts: 'frontend/feedback.txt',
                             allowEmptyArchive: true
        }

        success {
            echo 'BUILD SUCCESSFUL'
        }

        failure {
            echo 'BUILD FAILED'
        }
    }
}