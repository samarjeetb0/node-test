pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo 'building the app ...'
                script {
                    def test = 1+1 > 1 ? 'Success' : 'Failed'
                    echo test
                }
            }
        }
        stage("test") {
            steps {
                echo 'testing the app ...'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying the app ...'
            }
        }
    }
}
