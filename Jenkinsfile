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
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'node test.js'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {

        success {
            echo 'BUILD SUCCESSFUL'

            archiveArtifacts artifacts: 'feedback.txt',
                             allowEmptyArchive: false
        }

        failure {
            echo 'BUILD FAILED'

            archiveArtifacts artifacts: 'feedback.txt',
                             allowEmptyArchive: true
        }
    }
}