(function() {var implementors = {};
implementors["gbdt"] = [{"text":"impl&lt;T&gt; Serialize for BinaryTreeNode&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for BinaryTree&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Loss","synthetic":false,"types":[]},{"text":"impl Serialize for Config","synthetic":false,"types":[]},{"text":"impl Serialize for Data","synthetic":false,"types":[]},{"text":"impl Serialize for DecisionTree","synthetic":false,"types":[]},{"text":"impl Serialize for GBDT","synthetic":false,"types":[]},{"text":"impl Serialize for FileFormat","synthetic":false,"types":[]},{"text":"impl Serialize for InputFormat","synthetic":false,"types":[]}];
implementors["jsonwebtoken"] = [{"text":"impl Serialize for Algorithm","synthetic":false,"types":[]},{"text":"impl Serialize for Header","synthetic":false,"types":[]}];
implementors["rulinalg"] = [{"text":"impl&lt;T&gt; Serialize for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for Vector&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["rustface"] = [{"text":"impl Serialize for FaceInfo","synthetic":false,"types":[]}];
implementors["rusty_machine"] = [{"text":"impl Serialize for DBSCAN","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;Criterion&gt; Serialize for GenLinearModel&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Logit","synthetic":false,"types":[]},{"text":"impl Serialize for Log","synthetic":false,"types":[]},{"text":"impl Serialize for Identity","synthetic":false,"types":[]},{"text":"impl Serialize for Bernoulli","synthetic":false,"types":[]},{"text":"impl Serialize for Binomial","synthetic":false,"types":[]},{"text":"impl Serialize for Normal","synthetic":false,"types":[]},{"text":"impl Serialize for Poisson","synthetic":false,"types":[]},{"text":"impl Serialize for CovOption","synthetic":false,"types":[]},{"text":"impl Serialize for GaussianMixtureModel","synthetic":false,"types":[]},{"text":"impl Serialize for LinRegressor","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; Serialize for LogisticRegressor&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: OptimAlgorithm&lt;BaseLogisticRegressor&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for BaseLogisticRegressor","synthetic":false,"types":[]},{"text":"impl&lt;InitAlg:&nbsp;Initializer&gt; Serialize for KMeansClassifier&lt;InitAlg&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;InitAlg: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Forgy","synthetic":false,"types":[]},{"text":"impl Serialize for RandomPartition","synthetic":false,"types":[]},{"text":"impl Serialize for KPlusPlus","synthetic":false,"types":[]},{"text":"impl Serialize for ConstMean","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Kernel, U:&nbsp;MeanFunc&gt; Serialize for GaussianProcess&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Kernel&gt; Serialize for SVM&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Distribution&gt; Serialize for NaiveBayes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Gaussian","synthetic":false,"types":[]},{"text":"impl Serialize for Bernoulli","synthetic":false,"types":[]},{"text":"impl Serialize for Multinomial","synthetic":false,"types":[]},{"text":"impl Serialize for BruteForce","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;KNearestSearch&gt; Serialize for KNNClassifier&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for PCA","synthetic":false,"types":[]},{"text":"impl Serialize for ErrorKind","synthetic":false,"types":[]},{"text":"impl Serialize for GradientDesc","synthetic":false,"types":[]},{"text":"impl Serialize for StochasticGD","synthetic":false,"types":[]},{"text":"impl Serialize for AdaGrad","synthetic":false,"types":[]},{"text":"impl Serialize for RMSProp","synthetic":false,"types":[]},{"text":"impl Serialize for ConjugateGD","synthetic":false,"types":[]},{"text":"impl Serialize for Sigmoid","synthetic":false,"types":[]},{"text":"impl Serialize for Linear","synthetic":false,"types":[]},{"text":"impl Serialize for Exp","synthetic":false,"types":[]},{"text":"impl Serialize for Tanh","synthetic":false,"types":[]},{"text":"impl Serialize for MeanSqError","synthetic":false,"types":[]},{"text":"impl Serialize for CrossEntropyError","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; Serialize for KernelSum&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Kernel,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Kernel,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; Serialize for KernelProd&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Kernel,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Kernel,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Kernel&gt; Serialize for KernelArith&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Linear","synthetic":false,"types":[]},{"text":"impl Serialize for Polynomial","synthetic":false,"types":[]},{"text":"impl Serialize for SquaredExp","synthetic":false,"types":[]},{"text":"impl Serialize for Exponential","synthetic":false,"types":[]},{"text":"impl Serialize for HyperTan","synthetic":false,"types":[]},{"text":"impl Serialize for Multiquadric","synthetic":false,"types":[]},{"text":"impl Serialize for RationalQuadratic","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float&gt; Serialize for Regularization&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl Serialize for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Value","synthetic":false,"types":[]},{"text":"impl Serialize for Number","synthetic":false,"types":[]}];
implementors["teaclave_attestation"] = [{"text":"impl Serialize for EndorsedAttestationReport","synthetic":false,"types":[]}];
implementors["teaclave_binder"] = [{"text":"impl Serialize for StartServiceInput","synthetic":false,"types":[]},{"text":"impl Serialize for StartServiceOutput","synthetic":false,"types":[]},{"text":"impl Serialize for InitEnclaveInput","synthetic":false,"types":[]},{"text":"impl Serialize for InitEnclaveOutput","synthetic":false,"types":[]},{"text":"impl Serialize for FinalizeEnclaveInput","synthetic":false,"types":[]},{"text":"impl Serialize for FinalizeEnclaveOutput","synthetic":false,"types":[]},{"text":"impl Serialize for RunTestInput","synthetic":false,"types":[]},{"text":"impl Serialize for RunTestOutput","synthetic":false,"types":[]},{"text":"impl Serialize for RawJsonInput","synthetic":false,"types":[]},{"text":"impl Serialize for RawJsonOutput","synthetic":false,"types":[]}];
implementors["teaclave_config"] = [{"text":"impl Serialize for RuntimeConfig","synthetic":false,"types":[]}];
implementors["teaclave_crypto"] = [{"text":"impl Serialize for AesGcm256Key","synthetic":false,"types":[]},{"text":"impl Serialize for AesGcm128Key","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveFile128Key","synthetic":false,"types":[]}];
implementors["teaclave_proto"] = [{"text":"impl Serialize for UserRegisterRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UserRegisterResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UserUpdateRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UserUpdateResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UserLoginRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UserLoginResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UserAuthenticateRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UserAuthClaims","synthetic":false,"types":[]},{"text":"impl Serialize for UserAuthenticateResponse","synthetic":false,"types":[]},{"text":"impl Serialize for ListUsersRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ListUsersResponse","synthetic":false,"types":[]},{"text":"impl Serialize for ResetUserPasswordRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ResetUserPasswordResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UserChangePasswordRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UserChangePasswordResponse","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteUserRequest","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteUserResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveAuthenticationApiRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveAuthenticationApiResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveAuthenticationInternalRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveAuthenticationInternalResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UserCredential","synthetic":false,"types":[]},{"text":"impl Serialize for FileCryptoInfo","synthetic":false,"types":[]},{"text":"impl Serialize for TaskOutputs","synthetic":false,"types":[]},{"text":"impl Serialize for TaskFailure","synthetic":false,"types":[]},{"text":"impl Serialize for TaskResult","synthetic":false,"types":[]},{"text":"impl Serialize for Result","synthetic":false,"types":[]},{"text":"impl Serialize for TaskStatus","synthetic":false,"types":[]},{"text":"impl Serialize for ExecutorStatus","synthetic":false,"types":[]},{"text":"impl Serialize for ExecutorCommand","synthetic":false,"types":[]},{"text":"impl Serialize for GetRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetResponse","synthetic":false,"types":[]},{"text":"impl Serialize for PutRequest","synthetic":false,"types":[]},{"text":"impl Serialize for PutResponse","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteRequest","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteResponse","synthetic":false,"types":[]},{"text":"impl Serialize for EnqueueRequest","synthetic":false,"types":[]},{"text":"impl Serialize for EnqueueResponse","synthetic":false,"types":[]},{"text":"impl Serialize for DequeueRequest","synthetic":false,"types":[]},{"text":"impl Serialize for DequeueResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveStorageRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveStorageResponse","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterInputFileRequest","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterInputFileResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateInputFileRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateInputFileResponse","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterOutputFileRequest","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterOutputFileResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateOutputFileRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateOutputFileResponse","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterFusionOutputRequest","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterFusionOutputResponse","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterInputFromOutputRequest","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterInputFromOutputResponse","synthetic":false,"types":[]},{"text":"impl Serialize for GetOutputFileRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetOutputFileResponse","synthetic":false,"types":[]},{"text":"impl Serialize for GetInputFileRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetInputFileResponse","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionInput","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionOutput","synthetic":false,"types":[]},{"text":"impl Serialize for OwnerList","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterFunctionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for RegisterFunctionResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateFunctionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateFunctionResponse","synthetic":false,"types":[]},{"text":"impl Serialize for GetFunctionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetFunctionResponse","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteFunctionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for DeleteFunctionResponse","synthetic":false,"types":[]},{"text":"impl Serialize for DisableFunctionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for DisableFunctionResponse","synthetic":false,"types":[]},{"text":"impl Serialize for ListFunctionsRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ListFunctionsResponse","synthetic":false,"types":[]},{"text":"impl Serialize for DataMap","synthetic":false,"types":[]},{"text":"impl Serialize for CreateTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for CreateTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for GetTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for GetTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for AssignDataRequest","synthetic":false,"types":[]},{"text":"impl Serialize for AssignDataResponse","synthetic":false,"types":[]},{"text":"impl Serialize for ApproveTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for ApproveTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for InvokeTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for InvokeTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for CancelTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for CancelTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveFrontendRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveFrontendResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveManagementRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveManagementResponse","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeDataRequest","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeDataResponse","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeFunctionRequest","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeFunctionResponse","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeStagedTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for AuthorizeStagedTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveAccessControlRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveAccessControlResponse","synthetic":false,"types":[]},{"text":"impl Serialize for SubscribeRequest","synthetic":false,"types":[]},{"text":"impl Serialize for SubscribeResponse","synthetic":false,"types":[]},{"text":"impl Serialize for HeartbeatRequest","synthetic":false,"types":[]},{"text":"impl Serialize for HeartbeatResponse","synthetic":false,"types":[]},{"text":"impl Serialize for PullTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for PullTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateTaskStatusRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateTaskStatusResponse","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateTaskResultRequest","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateTaskResultResponse","synthetic":false,"types":[]},{"text":"impl Serialize for PublishTaskRequest","synthetic":false,"types":[]},{"text":"impl Serialize for PublishTaskResponse","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveSchedulerRequest","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveSchedulerResponse","synthetic":false,"types":[]}];
implementors["teaclave_rpc"] = [{"text":"impl&lt;T&gt; Serialize for Request&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["teaclave_types"] = [{"text":"impl Serialize for FileAuthTag","synthetic":false,"types":[]},{"text":"impl Serialize for FileCrypto","synthetic":false,"types":[]},{"text":"impl Serialize for ECallStatus","synthetic":false,"types":[]},{"text":"impl Serialize for TeeServiceError","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveServiceResponseError","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveInputFile","synthetic":false,"types":[]},{"text":"impl Serialize for TeaclaveOutputFile","synthetic":false,"types":[]},{"text":"impl Serialize for HandleFileCommand","synthetic":false,"types":[]},{"text":"impl Serialize for FileAgentRequest","synthetic":false,"types":[]},{"text":"impl Serialize for HandleFileInfo","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionInput","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionOutput","synthetic":false,"types":[]},{"text":"impl Serialize for User","synthetic":false,"types":[]},{"text":"impl Serialize for Function","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionArguments","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionInputFiles","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionOutputFiles","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionInputFile","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionOutputFile","synthetic":false,"types":[]},{"text":"impl Serialize for StagedTask","synthetic":false,"types":[]},{"text":"impl Serialize for UserID","synthetic":false,"types":[]},{"text":"impl Serialize for OwnerList","synthetic":false,"types":[]},{"text":"impl Serialize for TaskStatus","synthetic":false,"types":[]},{"text":"impl Serialize for OutputsTags","synthetic":false,"types":[]},{"text":"impl Serialize for TaskOutputs","synthetic":false,"types":[]},{"text":"impl Serialize for TaskFailure","synthetic":false,"types":[]},{"text":"impl Serialize for ExternalID","synthetic":false,"types":[]},{"text":"impl Serialize for TaskResult","synthetic":false,"types":[]},{"text":"impl Serialize for TaskFileOwners","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Serialize for TaskFiles&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for TaskState","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;StateTag&gt; Serialize for Task&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Create","synthetic":false,"types":[]},{"text":"impl Serialize for Assign","synthetic":false,"types":[]},{"text":"impl Serialize for Approve","synthetic":false,"types":[]},{"text":"impl Serialize for Stage","synthetic":false,"types":[]},{"text":"impl Serialize for Run","synthetic":false,"types":[]},{"text":"impl Serialize for Finish","synthetic":false,"types":[]},{"text":"impl Serialize for Done","synthetic":false,"types":[]},{"text":"impl Serialize for Cancel","synthetic":false,"types":[]},{"text":"impl Serialize for Fail","synthetic":false,"types":[]},{"text":"impl Serialize for UserRole","synthetic":false,"types":[]},{"text":"impl Serialize for UserAuthClaims","synthetic":false,"types":[]},{"text":"impl Serialize for ExecutorType","synthetic":false,"types":[]},{"text":"impl Serialize for Executor","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl Serialize for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Value","synthetic":false,"types":[]},{"text":"impl Serialize for Datetime","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Serialize&gt; Serialize for Spanned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S&gt; Serialize for Host&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Url","synthetic":false,"types":[]}];
implementors["uuid"] = [{"text":"impl Serialize for Uuid","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()