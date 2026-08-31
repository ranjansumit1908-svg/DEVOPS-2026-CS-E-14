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
                dir('backend') {
                    bat 'npm ci'
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    bat 'node test.js'
                }
            }
        }
    }

    post {

        success {
            echo 'BUILD SUCCESSFUL'

            archiveArtifacts artifacts: 'backend/feedback-report.txt',
                             allowEmptyArchive: false
        }

        failure {
            echo 'BUILD FAILED'

            archiveArtifacts artifacts: 'backend/feedback-report.txt',
                             allowEmptyArchive: true
        }
    }
}