pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Test') {
            steps {
                dir('backend') {
                    bat 'node test.js'
                }
            }
        }

    }

    post {

        always {
            archiveArtifacts artifacts: 'backend/feedback-report.txt'
        }

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }

    }
}