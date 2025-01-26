using Entities;
using Repositories;
using DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;

namespace Services
{
    public class MazalTovService : IMazalTovService
    {
        private readonly IMazalTovRepository _repository;
        private readonly IMapper _mapper;

        public MazalTovService(IMazalTovRepository repository,IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<MazalTov>> GetAllAsync() => await _repository.GetAllAsync();

        public async Task<MazalTov> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

        public async Task AddAsync(MazalTovDTO mazalTov)
        {
            var mt= _mapper.Map<MazalTov>(mazalTov); 
            await _repository.AddAsync(mt);
        
        }

        public async Task UpdateAsync(MazalTov mazalTov) => await _repository.UpdateAsync(mazalTov);

        public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
    }

}
