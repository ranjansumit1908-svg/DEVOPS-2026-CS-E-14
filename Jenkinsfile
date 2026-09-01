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
            archiveArtifacts artifacts: 'backend/feedback-report.txt'
        }

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }


        success {
            echo 'BUILD SUCCESSFUL'

            archiveArtifacts artifacts: 'frontend/feedback.txt',
                             allowEmptyArchive: false
        }

        failure {
            echo 'BUILD FAILED'

            archiveArtifacts artifacts: 'frontend/feedback.txt',
                             allowEmptyArchive: true
        }

    }
}