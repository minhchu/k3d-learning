# K3d Learning Repo

## Prerequisites

- [Docker](https://www.docker.com/)
- [k3d](https://k3d.io)
- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

## Running this project

1. Create a private registry: 

```bash
k3d registry create test-app-registry --port 5050
```

2. Create a cluster with above registry:

```bash 
k3d cluster create -p "9900:80@loadbalancer" --registry-use k3d-test-app-registry:5050 --registry-config registries.yaml mycluster
```

3. Dockerize Nodejs App:

```bash
cd nodejs-app
docker build -t nodejs-app .
```

4. Push the image to registry:

```bash
docker tag nodejs-app:latest localhost:5050/nodejs-app:1.0

docker push localhost:5050/nodejs-app:1.0
```

5. Create deployment:

```bash
# k is alias to kubectl
k apply -f deployment.yaml
```

6. Create service: 

```bash
k apply -f service.yaml
```

7. Create ingress:

```bash
k apply -f ingress.yaml
```

8. Visit `locahost:9900`

9. View info:

```bash 
k get deployments
k get service
k get ingress
k logs -l app:node-app -f
```

## K8s dashboard

```bash
k apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
```

```bash
k apply -f service-account.yaml
```

```bash
k -n kubernetes-dashboard create token admin-user
```

Access:

```bash
k proxy
```

Visit: 
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

Login using generated token above
